import './App.scss';
import { PageContent } from './components/PageContent';
import { Sidebar } from './components/Sidebar';

export const App = () => (
  <div className="page">
    <PageContent />
    <Sidebar />
  </div>
);
