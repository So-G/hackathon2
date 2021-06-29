import SideBar from '../components/SideBar';
import SecondaryNav from '../components/secondaryNav';
import project from '../assets/placeholder.png';

export default function HomePage() {
  return (
    <>
      <SecondaryNav />
      <div className="content">
        <img src={project} alt="projects" />
        <SideBar />
      </div>
    </>
  );
}
