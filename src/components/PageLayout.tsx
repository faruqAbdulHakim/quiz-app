import AppBar from './AppBar';

interface Props {
  children?: React.ReactNode;
}

function PageLayout({ children }: Props) {
  return (
    <div className="bg-slate-800 min-h-screen text-slate-100 flex flex-col">
      <AppBar />
      <div className="flex-1 flex flex-col p-4">{children}</div>
    </div>
  );
}

export default PageLayout;
