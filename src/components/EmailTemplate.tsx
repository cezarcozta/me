export function EmailTemplate({ name, email, message }: { name: string, email: string, message: string }) {
    return (
        <div>
            <h4>Nome: {name}</h4>
            <h4>Email: {email}</h4>
            <p>Te enviou um email direto do site portfólio com a sequinte mensagem: </p>            <h5>Mensagem: </h5><br />
            <p>{message}</p>
        </div>
    )
}