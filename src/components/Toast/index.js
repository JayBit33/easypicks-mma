
import { Content, Wrapper } from './Toast.styles';

const Toast = ({ msg }) => {

  return (
    <Wrapper>
      <Content>
        <h4>{msg}.</h4>
      </Content>
    </Wrapper>
  );
};

export default Toast;