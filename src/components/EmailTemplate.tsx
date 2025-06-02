export function EmailTemplate({ name, email, message }: { name: string, email: string, message: string }) {
    return (
        <div>
            <h4>Nome: {name}</h4>
            <h4>Email: {email}</h4>
            <h5>Te enviou um email direto do site portfólio com a sequinte Mensagem: </h5><br />
            <p>{message}</p>
        </div>
    )
}