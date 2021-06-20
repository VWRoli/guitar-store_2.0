//todo icon is actualy icontype, but it doesn't recognize it, figure it out later
interface Props {
  url: string;
  icon: any;
}

const SocialIcon: React.FC<Props> = ({ url, icon }) => {
  return (
    <a
      className="social-icon-link"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Facebook">
      {icon}
    </a>
  );
};

export default SocialIcon;
