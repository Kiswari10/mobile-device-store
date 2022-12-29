import { Layout } from 'antd';

const { Footer } = Layout;

export default function MainFooter() {
  return (
    <Footer
      style={{
        textAlign: 'center',
        padding: 10,
      }}
    >
      Copyright ©2022
    </Footer>
  );
}
