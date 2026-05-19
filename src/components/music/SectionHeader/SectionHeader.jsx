import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../../ui/Icons/Icons';
import './SectionHeader.css';

export default function SectionHeader({ title, subtitle, linkTo, linkLabel = 'See All' }) {
  return (
    <div className="section-header">
      <div className="section-header-text">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {linkTo && (
        <Link to={linkTo} className="section-link">
          {linkLabel}
          <ChevronRightIcon size={14} />
        </Link>
      )}
    </div>
  );
}
