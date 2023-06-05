function sendMessage() {
    var userInput = document.getElementById("chat-input").value;
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = userInput;
    document.getElementById("user-message").appendChild(userMessage);
    document.getElementById("chat-input").value = "";

    // Simulación de respuesta del bot
    setTimeout(function() {
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.textContent = generateBotResponse(userInput);
        document.getElementById("user-message").appendChild(botMessage);
    }, 1000);
}

function generateBotResponse(userInput) {
        //aqui se agrega datos de respuesta con la siguiente sintaxis: "pregunta":"respuesta",
    var keywordResponses = {
        "menu": "Preguntas que puede realizar:\n1) INTERNACIONALÍZATE\n2) CONOCE TU NUEVO PORTAL ESTUDIANTIL\n3) EXPERIENCIA ACADÉMICA\n4) VIDA UNIVERSITARIA\n5) SEGURIDAD E HIGIENE\n6) INTERACCIÓN Y APOYO ESTUDIANTIL",
        "hola": "¡Hola! Soy un bot de preguntas frecuentes realizadas. Pregúntame cualquier cosa relacionada con la universidad escribiendo menu y trataré de ayudarte.",
        "adios": "¡Hasta luego!",
        "INTERNACIONALIZATE": "Realize una de las siguientes preguntas\n¿Cuándo inicia el periodo de Postulación de Internacionalízate?\nLlegando a mi Intercambio, ¿tendré que estar 10 días en aislamiento?\n ¿Para irme de Intercambio dentro del Programa Internacionalízate se requiere estar vacunado?",
        "¿Cuándo inicia el periodo de Postulación de Internacionalízate?": "Mantente informado a través del siguiente link: https://rrii.unifranz.edu.bo/ ",
        "Llegando a mi Intercambio, ¿tendré que estar 10 días en aislamiento?": "Todo depende de la normativa de las autoridades de salud del país de destino.Se recomienda estar en constante comunicación con el Coordinador de Movilidad Internacional de tu sede",
        "¿Para irme de Intercambio dentro del Programa Internacionalízate se requiere estar vacunado?": "Las indicaciones sobre cómo realizar tu viaje a tu destino las establece cada país y la universidad anfitriona. La mayoría de los países exigen una prueba PCR antes de viajar y hay algunos que establecen requisitos adicionales.Es necesario consultar continuamente las páginas oficiales de la aerolínea, la embajada del país de tu destino y la universidad anfitriona.",
        
        "SEGURIDAD E HIGIENE": "Realize una de las siguientes preguntas\n¿Cuáles son las medidas sanitarias en personas totalmente vacunadas?\n¿Los estudiantes vulnerables o que se encuentren atravesando la enfermedad del Virus COVID 19 deben asistir a las actividades presenciales?\n¿Cómo van a asegurar que todos los estudiantes y los administrativos tomen las medidas de bioseguridad?\n¿Qué pasa con los espacios en Biblioteca y las cafeterías?\n¿Cómo se garantiza la ventilación de espacios cerrados?",
        "¿Cuáles son las medidas sanitarias en personas totalmente vacunadas?":"Dado que el virus está aún latente, y las vacunas no evitan los contagios ni que existan personas portadoras, las medidas de bioseguridad son las mismas; Lavado de manos permanente, distanciamiento social, evitar aglomeraciones y observar todas las recomendaciones de la señalética instalada en la Universidad.",
        "¿Los estudinates vulnerables o que se encuentren atravesando la enfermedad del Virus COVID 19 deben asistir a las actividades presenciales?":"Bajo consentimiento informado, y cumpliendo con las medidas de bioseguridad implementadas en la Universidad no pueden asistir a actividades presenciales hasta no pasar la enfermedad y dar negativo en una prueba de laboratorio clínico que deberá ser presentada.El caso debe ser informado al área de servicios estudiantiles.",
        "¿Como van a asegurar que todos los estudiantes y los administradores tomen las medidas de bioseguridad?":"En el caso de los administrativos, estas medidas son obligatorias, y se han desplegado diferentes canales de comunicación para la toma de conciencia de los administrativos.El 100% de nuestros profesores y colaboradores se encuentran vacunados.",
        "¿Qué pasa con los espacios en Biblioteca y las cafeterías?":"Funcionarán cumpliendo medidas de bioseguridad específicas.",
        "¿Cómo se garantiza la ventilación de espacios cerrados?":"Se tomarán las medidas técnicas de bioseguridad que las instalaciones requieran. En casos extremos, se evitará el uso de dichos ambientes.",            

        "INTERACCION Y APOYO ESTUDIANTIL": "Realize una de las siguientes preguntas\n¿Qué es la Oficina de Apoyo Estudiantil?\n¿Qué estudiantes son candidatos a recibir los apoyos de la Oficina de Apoyo al Estudiante (OAE)?\n¿A partir de cuándo y hasta cuándo recibirán postulaciones para acceder a este fondo?\n¿Qué vigencia tienen los Apoyos de la OAE?\n¿Cuáles son los canales de comunicación para resolver mis dudas?\nQuiero agendar cita con un asesor de la OAE",
        "¿Qué es la Oficina de Apoyo Estudiantil?":"Es un área conformada por personal especializado que te ayudará en temas académicos y económicos, mayor información en la siguiente página: https://www.oae.unifranz.edu.bo/",
        "¿Qué estudiantes son candidatos a recibir los apoyos de la Oficina de Apoyo al Estudiante (OAE)?":"Todo estudiante regular de la universidad que demuestre la necesidad de apoyo y cuente con su certificado de vacunación contra el COVID-19 puede postular a alguno de los programas brindados por la Oficina de Apoyo Estudiantil (OAE).Para mayor información sobre planes de pago, la bolsa de apoyo económico, apoyo académico o asesoramiento en crédito educativo consulta la siguiente página: https://www.oae.unifranz.edu.bo/",
        "¿A partir de cuándo y hasta cuándo recibirán postulaciones para acceder a este fondo?":"El calendario será actualizado en los próximos días, comunícate con el área de Servicios estudiantiles de tu sede para tener más información.",
        "¿Qué vigencia tienen los Apoyos de la OAE?":"Todos los programas de apoyo brindados por la OAE tienen vigencia dentro el semestre académico cuando se hace la postulación.",
        "¿Cuáles son los canales de comunicación para resolver mis dudas?":"Puedes escribirnos a los siguientes correos con tus datos personales y de contacto e inmediatamente nos contactaremos contigo:\nOAE La Paz: oae.lpz@unifranz.edu.bo\nOAE El Alto: oae_ea@unifranz.edu.bo\nOAE Cochabamba: oaecbba@unifranz.edu.bo\nOAE Santa Cruz: oae.scz@unifranz.edu.bo\nTambién puedes escribirnos vía WhatsApp al siguiente número 71502211 o a través de los chats habilitados en nuestras páginas oficiales en Facebook e Instagram en horarios de oficina.",
        "Quiero agendar cita con un asesor de la OAE":"Por favor escribirnos a los siguientes correos con tus datos personales y de contacto\nOAE La Paz: oae.lpz@unifranz.edu.bo\nOAE El Alto: oae_ea@unifranz.edu.bo\nOAE Cochabamba: oaecbba@unifranz.edu.bo\nOAE Santa Cruz: oae.scz@unifranz.edu.bo\nPara mayor información consulta la siguiente página: https://www.oae.unifranz.edu.bo/",
        
    };

    // Verificar si alguna palabra clave está contenida en el userInput
    for (var keyword in keywordResponses) {
        if (userInput.toLowerCase().includes(keyword)) {
            return keywordResponses[keyword];
        }
    }

    return "Lo siento, no puedo responder a eso en este momento.";
}
