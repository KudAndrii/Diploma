import { apiConfig } from "../apiConfig";
import UserType from "../Types/UserType";

const LoginRequest = async (
    login: string,
    password: string
): Promise<UserType> => {
    const requestBody = {
        login: login,
        password: password,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    };

    const result: Response = await fetch(
        `https://localhost:7026/accounts/login`,
        requestOptions
    );
    const body = await result.json();
    let user = new Object() as UserType;
    if (body) {
        user = body as UserType;
    }

    return user;
};

export default LoginRequest;
