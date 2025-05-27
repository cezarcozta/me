export function EmailTemplate({ message }: { message: string }) {
    return (
        <div>
            <p>Welcome, World! {message}</p>
        </div>
    )
}