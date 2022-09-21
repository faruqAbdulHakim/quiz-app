import AppName from 'components/AppName';
import PageLayout from 'components/PageLayout';
import Form from './Form';

function WelcomeScreen() {
  return (
    <PageLayout>
      <div className="flex-1 flex flex-col items-center mt-16 lg:mt-32 gap-4 lg:gap-6">
        <AppName />
        <Form />
      </div>
    </PageLayout>
  );
}

export default WelcomeScreen;
