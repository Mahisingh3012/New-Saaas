import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const AuthControls = async () => {
  return (
    <div className="flex items-center gap-3">
      <Show when="signed-out">
        <SignInButton mode="redirect">
          <button type="button" className="btn-signin">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="redirect">
          <button type="button" className="btn-signin">
            Sign Up
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
};

export default AuthControls;
