import app from 'apprun';
import { PageContainer, ProLayout } from '@ant-design/pro-components';

export default () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/',
        }}
        route={{
          routes: [
            {
              path: '/',
              name: (
                <a href="/">
                  Home
                </a>
              ),
              icon: 'icon-home',
            },
            {
              path: '/about',
              name: (
                <a href="/about">
                  About
                </a>
                ),
              icon: 'icon-about',
            },
            {
              path: '/contact',
              name: (
                <a href="/contact">
                  Contact
                </a>
              ),
              icon: 'icon-contact',
            },
          ],
        }}
      >
        <PageContainer
          ghost
          header={{
            title: '',
            breadcrumb: {},
          }}
        >
          <div id="main-app"></div>
        </PageContainer>
      </ProLayout>
    </div>
  );

}
