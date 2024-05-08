import styled from 'styled-components';

import UserLogin from './UserLogin';

const HeaderContainer = styled.header`
    height: 100vh;
    width: 100%;
`;

const Header = () => {
    return (
        <HeaderContainer>
            
            <UserLogin/>
        </HeaderContainer>
    );
};

export default Header;