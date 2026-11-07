import React, { useState, useRef, useEffect } from 'react';
import { Bot, RotateCcw, Send, Sparkles, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { BotMessage, SergioBotOption } from '../types';

interface SergioBotProps {
  onSelectPermitForBooking: (permitId: string) => void;
}

export const SergioBot: React.FC<SergioBotProps> = ({ onSelectPermitForBooking }) => {
  const initialMessages: BotMessage[] = [
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! Soy el asistente de Autoescuela Sergio Alcaudete. Este test es solo una ayuda voluntaria por si dudas sobre qué carnet te corresponde según tu edad o necesidades.',
    },
    {
      id: '2',
      sender: 'bot',
      text: '¿En qué situación te encuentras hoy?',
      options: [
        { label: '🤔 No sé qué carnet sacarme (ayúdame a elegir)', nextStep: 'primer_carnet' },
        { label: '🚗 Ya sé que quiero coche (Carnet B)', nextStep: 'coche' },
        { label: '🏍️ Ya sé que quiero moto (AM, A1 o A2)', nextStep: 'moto' },
        { label: '📋 Información sobre precios y horarios', nextStep: 'clases_info' },
        { label: '💬 Hablar directo con Sergio por WhatsApp', nextStep: 'asesoramiento' },
      ],
    },
  ];

  const [messages, setMessages] = useState<BotMessage[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleReset = () => {
    setMessages(initialMessages);
    setInputText('');
  };

  const handleOptionClick = (option: SergioBotOption) => {
    // Add user selection
    const userMsg: BotMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: option.label,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      processNextStep(option.nextStep);
      setIsTyping(false);
    }, 550);
  };

  const processNextStep = (step: string) => {
    let responseMsg: BotMessage;

    switch (step) {
      case 'primer_carnet':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: '¡Gran decisión! Para orientarte de forma exacta, ¿cuál es tu edad actual?',
          options: [
            { label: 'Menor de 15 años', nextStep: 'edad_menor_15' },
            { label: '15 años cumplidos', nextStep: 'edad_15' },
            { label: '16 o 17 años', nextStep: 'edad_16_17' },
            { label: '18 años o más', nextStep: 'edad_18_mas' },
          ],
        };
        break;

      case 'edad_menor_15':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: '¡Estupendo que ya tengas ganas de empezar! El permiso más temprano en España es el AM (ciclomotor) a partir de los 15 años. Puedes pasarte por la autoescuela en Alcaudete para ir conociendo el material teórico y prepararte con tiempo.',
          options: [
            { label: 'Ver información de contacto', nextStep: 'asesoramiento' },
            { label: 'Volver al inicio del test', nextStep: 'inicio' },
          ],
        };
        break;

      case 'edad_15':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Con 15 años puedes obtener el Permiso AM (Ciclomotor hasta 50cc). Es la opción perfecta para moverte por Alcaudete y municipios cercanos con autonomía.',
          recommendation: {
            permitId: 'moto',
            title: 'Permiso AM (Ciclomotores)',
            description: 'Conducción de ciclomotores de dos o tres ruedas y cuadriciclos ligeros.',
            recommendedReason: 'Ideal por tu edad (15 años) para conseguir tu primera independencia de movilidad.',
          },
        };
        break;

      case 'edad_16_17':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Tienes dos excelentes alternativas:\n1) Carnet A1 (Motos hasta 125cc), ya disponible desde los 16 años.\n2) Empezar a preparar el Carnet B (Coche): ¡puedes presentarte al examen teórico oficial 3 meses antes de cumplir los 18 años!',
          options: [
            { label: 'Quiero Carnet B (Coche)', nextStep: 'coche' },
            { label: 'Quiero Carnet A1 (Moto 125cc)', nextStep: 'moto_a1' },
          ],
        };
        break;

      case 'edad_18_mas':
      case 'coche':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Para turismos y vehículos ligeros hasta 3.500 kg, el Carnet B es la opción estrella y la más demandada en Alcaudete. En Autoescuela Sergio te preparamos la teórica sin rodeos y las prácticas con flexibilidad total adaptada a tu horario de estudio o trabajo.',
          recommendation: {
            permitId: 'b',
            title: 'Carnet B (Turismos y Furgonetas)',
            description: 'El permiso imprescindible para turismos, coches familiares y vehículos ligeros.',
            recommendedReason: 'Te brinda libertad total de desplazamiento para tu día a día, estudios y trabajo.',
          },
        };
        break;

      case 'moto':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: '¿Qué tipo de moto te gustaría conducir?',
          options: [
            { label: 'Ciclomotor (hasta 50cc - 15 años)', nextStep: 'edad_15' },
            { label: 'Moto hasta 125cc (A1 - desde 16 años)', nextStep: 'moto_a1' },
            { label: 'Moto media hasta 35kW (A2 - desde 18 años)', nextStep: 'moto_a2' },
            { label: 'Moto de gran cilindrada (Carnet A)', nextStep: 'moto_a' },
          ],
        };
        break;

      case 'moto_a1':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'El Permiso A1 te autoriza a conducir motocicletas de hasta 125 cm³, potencia máxima de 11 kW y una relación potencia/peso de hasta 0,1 kW/kg.',
          recommendation: {
            permitId: 'moto',
            title: 'Permiso A1 (Motos 125cc)',
            description: 'Motos ligeras y scooters para carretera y ciudad con bajo consumo y máxima agilidad.',
            recommendedReason: 'Accesible desde los 16 años, además convalida la parte común del teórico de coche para el futuro.',
          },
        };
        break;

      case 'moto_a2':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'El Carnet A2 es el más demandado por motoristas a partir de 18 años. Te permite conducir motos de hasta 35 kW (~47 CV), que abarca una amplísima gama de modelos modernos.',
          recommendation: {
            permitId: 'moto',
            title: 'Permiso A2 (Motos hasta 35 kW)',
            description: 'Permiso para motocicletas de potencia media en circuito y vías abiertas.',
            recommendedReason: 'A partir de 18 años. Tras 2 años de experiencia podrás dar el salto al Carnet A completo.',
          },
        };
        break;

      case 'moto_a':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Para el Permiso A (sin limitación de cilindrada ni potencia) se requiere tener al menos 20 años cumplidos y un mínimo de 2 años con el carnet A2 en vigor. Consiste en un curso de formación teórico-práctica sin examen de la DGT.',
          recommendation: {
            permitId: 'moto',
            title: 'Permiso A (Todas las motos)',
            description: 'Acceso directo a cualquier cilindrada sin límite de caballos.',
            recommendedReason: 'Formación progresiva y segura tras dos años de experiencia con el A2.',
          },
        };
        break;

      case 'clases_info':
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'En Autoescuela Sergio en Alcaudete contamos con horarios adaptados a tu vida:\n\n• Mañanas: 10:30 a 13:30 h\n• Tardes de 5 a 8: 17:00 a 20:00 h\n\n• Formación teórica con apoyo individual y resolución de dudas con Sergio.\n• Prácticas individuales en rutas urbanas e interurbanas reales de la zona de Alcaudete y Jaén.\n• Clases de reciclaje si ya tienes carnet pero quieres recuperar confianza al volante.',
          options: [
            { label: 'Reservar clase por WhatsApp', nextStep: 'coche' },
            { label: 'Consultar información sobre Carnet B', nextStep: 'coche' },
            { label: 'Consultar información sobre Motos', nextStep: 'moto' },
          ],
        };
        break;

      case 'asesoramiento':
      default:
        responseMsg = {
          id: Date.now().toString(),
          sender: 'bot',
          text: '¡Estaremos encantados de atenderte personalmente! Puedes llamarnos al 690 14 04 40, escribirnos por WhatsApp o visitarnos en Tr.ª Peñuelas, 8 en Alcaudete (mañanas de 10:30 a 13:30 h y tardes de 5 a 8 de 17:00 a 20:00 h).',
          options: [
            { label: 'Reservar por WhatsApp con Sergio', nextStep: 'coche' },
            { label: 'Empezar test desde el principio', nextStep: 'inicio' },
          ],
        };
        break;

      case 'inicio':
        responseMsg = initialMessages[1];
        break;
    }

    setMessages((prev) => [...prev, responseMsg]);
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const userMsg: BotMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botReply = '';
      let rec: BotMessage['recommendation'] | undefined = undefined;

      if (lower.includes('precio') || lower.includes('cuesta') || lower.includes('tarifa') || lower.includes('matricula')) {
        botReply = 'Para consultar las tarifas vigentes, matrículas o bonos de prácticas, puedes consultar directamente por WhatsApp al 690 14 04 40 o en la autoescuela en Alcaudete (Tr.ª Peñuelas, 8). Te daremos la información y presupuesto según el carnet que necesites sin compromiso.';
      } else if (lower.includes('horario') || lower.includes('tarde') || lower.includes('mañana') || lower.includes('sabado')) {
        botReply = 'Nuestro horario de atención en Alcaudete es de Lunes a Viernes de 10:30 a 13:30 h y por las tardes de 5 a 8 (17:00 a 20:00 h). Las clases prácticas se coordinan con Sergio por WhatsApp según tu disponibilidad para adaptarse a tus estudios o trabajo.';
      } else if (lower.includes('donde') || lower.includes('direccion') || lower.includes('ubicacion')) {
        botReply = 'Estamos ubicados en Tr.ª Peñuelas, 8 en Alcaudete (Jaén). ¡Estás invitado/a a pasarte cuando quieras!';
      } else if (lower.includes('coche') || lower.includes('carnet b') || lower.includes('turismo')) {
        botReply = 'El Carnet B te permite conducir coches y vehículos de hasta 3.500 kg. Puedes examinarte del teórico con 17 años y 9 meses, y del práctico a los 18 años.';
        rec = {
          permitId: 'b',
          title: 'Carnet B (Coche)',
          description: 'Aprende a conducir con Sergio con tranquilidad, paciencia y máxima seguridad.',
          recommendedReason: 'El permiso más completo para tu vida diaria y laboral.',
        };
      } else if (lower.includes('moto') || lower.includes('a2') || lower.includes('a1') || lower.includes('am')) {
        botReply = 'Disponemos de formación para carnets de moto: AM (15 años), A1 (16 años), A2 (18 años) y A (20 años con 2 años de experiencia previa). ¿Cuál te interesa más?';
        rec = {
          permitId: 'moto',
          title: 'Permisos de Motocicleta',
          description: 'Preparación de maniobras y circulación en vías abiertas.',
          recommendedReason: 'Movilidad ágil y económica.',
        };
      } else if (lower.includes('miedo') || lower.includes('reciclaje') || lower.includes('años sin conducir')) {
        botReply = '¡Es totalmente habitual! En Autoescuela Sergio realizamos clases de reciclaje para personas que tienen carnet pero han perdido soltura o sienten respeto al tráfico. Sergio destaca por su cercanía y paciencia para que recuperes la tranquilidad al volante a tu ritmo.';
        rec = {
          permitId: 'otros',
          title: 'Clases de Reciclaje y Perfeccionamiento',
          description: 'Sesiones personalizadas a tu ritmo sin la presión de exámenes.',
          recommendedReason: 'Recupera tu seguridad y autonomía al volante.',
        };
      } else {
        botReply = `Gracias por tu consulta. En Autoescuela Sergio Alcaudete te atendemos de forma cercana y directa. Si deseas información sobre matrícula, prácticas o resolver cualquier otra duda, puedes reservar tu cita o contactar directamente al 690 14 04 40.`;
      }

      const botMsg: BotMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReply,
        recommendation: rec,
        options: [
          { label: 'Reservar cita informativa', nextStep: 'coche' },
          { label: 'Volver al test guiado', nextStep: 'inicio' },
        ],
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section id="sergiobot" className="py-20 bg-gradient-to-b from-slate-100 via-emerald-50/20 to-slate-100 border-b border-slate-200 relative overflow-hidden">
      {/* 25% Diffused Green / 75% Blue Atmosphere */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(132,204,22,0.14)_0%,transparent_65%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_65%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with clear non-mandatory framing */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-lime-600" />
            ASESORAMIENTO VOLUNTARIO · SOLO SI TIENES DUDAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            ¿No sabes qué carnet sacarte? SergioBot te orienta
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Si ya tienes claro tu permiso (coche, moto o reciclaje), puedes ir directo a reservar por WhatsApp. Si tienes dudas con los requisitos o la edad, este test opcional de 1 minuto te ayuda a elegir.
          </p>
        </div>

        {/* Direct Bypass Banner for anyone who already knows what they want */}
        <div className="mb-6 bg-white/95 border border-lime-500/35 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-slate-700">
            <span className="text-base">💡</span>
            <span>
              <strong>¿Ya tienes claro tu carnet?</strong> No es necesario que hagas el test:
            </span>
          </div>
          <button
            onClick={() => onSelectPermitForBooking('b')}
            className="text-slate-950 font-bold bg-[#84cc16] hover:bg-[#74b313] px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-xs"
          >
            <span>Ir directo a reservar por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Chat Widget Container */}
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(14,165,233,0.12),0_15px_30px_-5px_rgba(132,204,22,0.12)] border border-slate-200 overflow-hidden flex flex-col h-[560px]">
          {/* Top Bar of SergioBot with 25% green / 75% blue gradient */}
          <div className="bg-gradient-to-r from-[#071628] via-[#091f38] to-[#062628] text-white px-5 py-4 flex items-center justify-between border-b border-lime-500/30 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-lime-500/25 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-5 h-5 text-slate-950" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#081528] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-base leading-none">
                    SergioBot
                  </h3>
                  <span className="text-[11px] bg-slate-800 text-slate-300 font-medium px-2 py-0.5 rounded">
                    En línea
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Asesor de permisos · Alcaudete
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-lime-400 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg transition-colors border border-slate-700 font-medium"
              title="Reiniciar conversación"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/70">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-[#081528] text-lime-400 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-sky-700 text-white font-medium rounded-br-xs shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Recommendation Card */}
                  {msg.recommendation && (
                    <div className="mt-3.5 pt-3.5 border-t border-slate-100 bg-emerald-50/70 rounded-xl p-3.5 border border-emerald-200/80 text-slate-800">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Recomendación: {msg.recommendation.title}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {msg.recommendation.description}
                      </p>
                      <div className="text-xs font-semibold text-emerald-900 mt-2 bg-emerald-100/60 p-2 rounded-lg">
                        💡 {msg.recommendation.recommendedReason}
                      </div>
                      <button
                        onClick={() =>
                          onSelectPermitForBooking(msg.recommendation!.permitId)
                        }
                        className="mt-3 w-full bg-[#84cc16] hover:bg-[#74b313] text-slate-950 font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-98"
                      >
                        Reservar cita para este carnet
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Clickable Quick Options matching PDF Page 2 */}
                  {msg.options && (
                    <div className="mt-3 space-y-2">
                      {msg.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(opt)}
                          className="w-full text-left px-3.5 py-2.5 bg-slate-50 hover:bg-lime-50 text-slate-700 hover:text-slate-950 font-medium text-xs sm:text-sm rounded-lg border border-slate-200 hover:border-lime-400 transition-all flex items-center justify-between group"
                        >
                          <span>{opt.label}</span>
                          <span className="text-slate-400 group-hover:text-lime-600 font-bold transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#081528] text-lime-400 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-400 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Chat Input Form */}
          <form
            onSubmit={handleSendText}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu pregunta o duda sobre carnets..."
              className="flex-1 bg-slate-100 hover:bg-slate-50 focus:bg-white text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:border-sky-600 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="bg-[#84cc16] hover:bg-[#74b313] disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold p-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center flex-shrink-0"
              aria-label="Enviar mensaje a SergioBot"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
