import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const AuthPage: React.FC = () => {
    return <div className="sign-in-container container">
        <SignedOut>
            <SignUpButton mode="modal" />
            <SignInButton mode="modal"/>
        </SignedOut>

        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>;
};

export default AuthPage;
