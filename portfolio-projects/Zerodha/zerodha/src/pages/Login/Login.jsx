import LoginForm from "../../components/LoginForm";

export default function App() {
  return (
    <main className="bg-gray-100 h-screen w-screen flex flex-col justify-center items-center px-6 py-6">
      <div className="loginContainer box-border relative px-10 py-10 flex flex-col justify-evenly items-center gap-6 bg-white w-full rounded">
        <img
          src="./src/assets/images/logos/kite-logo.svg"
          alt="Logo"
          className="w-10 h-10"
        />
        <h2 className="text-3xl font-light">Login to Kite</h2>
        <LoginForm />
        <p className="text-xs text-gray-500">Forgot user ID or password?</p>
      </div>
    </main>
  );
}
