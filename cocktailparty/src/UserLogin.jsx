import styled from 'styled-components';

const UserLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5; // Example background color
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const InputField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const UserLogin = () => {
    return (
        <UserLoginContainer>
            <h2>Sign Up</h2>
            <form>
                <InputField type="text" placeholder="Username" />
                <InputField type="password" placeholder="Password" />
                <InputField type="date" placeholder="Date" />
                <button type="submit">Sign UP</button>
            </form>
        </UserLoginContainer>
    );
};

export default UserLogin;