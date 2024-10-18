export interface FooterProps {
  disclaimer?: string;
  description?: string;
  links: { name: string; url: string }[];
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-gray-100 h-24 py-3 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-5">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4">
              {props.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm text-muted-foreground">{props.description}</p>
          <p className="text-xxs text-muted-foreground absolute bottom-0 right-0">
            {props.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
