export default function ForgotPassword({ onSwitch }) {
    return (
        <div className='bg-white px-10 py-10 rounded-3xl border-2 custom-border'>
            <h1 className='text-3xl font-semibold text-center'>Recuperar Contraseña</h1>
            <p className='text-center font-medium text-lg text-gray-500 mt-2'>
                Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña.
            </p>

            <div className='mt-6'>
                <label className='text-lg font-medium'>Email</label>
                <input
                    type="email"
                    className='w-full border-2 custom-border rounded-xl p-2 mt-1 focus:outline-none bg-transparent'
                    placeholder='Ingresa tu email'
                />
            </div>

            <div className='mt-6 flex flex-col gap-y-3'>
                <button className='py-3 rounded-xl custom-button text-white text-lg font-semibold'>
                    Enviar enlace
                </button>
            </div>

            <div className='mt-6 flex flex-col items-center'>
                <button 
                    onClick={onSwitch} 
                    className='mt-1 custom-text font-semibold text-base hover:scale-105 ease-in-out'>
                    Volver al login
                </button>
            </div>
        </div>
    );
}
