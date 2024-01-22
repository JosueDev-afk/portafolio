<section>
    <div class="px-4 mx-auto max-w-screen-md">
        <p
            class="text-lg mb-4 text-pretty"
        >
        ¿Necesitas un sitio web o estás reclutando para tu empresa?<br> Estoy aquí para ayudarte.
        Completa el siguiente formulario y me pondré en contacto contigo a la brevedad.
        </p>
        <form action="contact" class="space-y-8">
            <div>
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >Email</label
                >
                <input
                    type="email"
                    id="email"
                    class="shadow-sm text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                />
            </div>
            <div>
                <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >Asunto</label
                >
                <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm rounded-lg focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 dtext-white focus:ring-primary-500 shadow-sm-light"
                    placeholder="Déjame saber en que te puedo ayudar"
                    required
                />
            </div>
            <div class="sm:col-span-2">
                <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >Tu mensaje</label
                >
                <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Deja un comentario..."></textarea>
            </div>
            <button
                type="submit"
                class="py-3 px-5 text-sm bg-white/5 font-medium text-center transition hover:scale-110 hover:bg-white/10 text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                >Enviar mensaje</button
            >
        </form>
    </div>
</section>
