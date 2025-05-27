export function EmailTemplate({ message }: { message: string }) {
    return (
        <div>
            <h1>Welcome, World! {message}</h1>
        </div>
    )
}