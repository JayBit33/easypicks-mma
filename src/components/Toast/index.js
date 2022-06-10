
import { Content, Wrapper } from './Toast.styles';

const Toast = ({ msg, isModalToast }) => {

  return (
    <Wrapper isModalToast={isModalToast}>
      <Content>
        <h4>{msg}.</h4>
      </Content>
    </Wrapper>
  );
};

export default Toast;