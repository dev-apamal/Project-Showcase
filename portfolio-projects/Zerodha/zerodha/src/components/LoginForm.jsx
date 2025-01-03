export default function LoginForm() {
  return (
    <form className="flex flex-col w-full gap-6">
      <input
        type="text"
        autofocus=""
        autocapitalize="none"
        name="username"
        placeholder="Phone or User ID"
        required=""
        id="id_username"
        className="px-4 py-2 w-full border-solid border-2 border-gray-100"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required=""
        id="id_password"
        autocomplete="current-password"
        className="px-4 py-2 w-full border-solid border-2 border-gray-100"
      />
      <input
        type="submit"
        className="px-4 py-2 w-full bg-orange-600 text-white"
        value="Login"
      />
    </form>
  );
}
