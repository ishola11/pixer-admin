import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const sanitizeHref = (href: string) => {
  const sanitized = href.replace(/\/{2,}/g, '/');
  console.log(`Sanitized URL: Original: ${href} -> Sanitized: ${sanitized}`);
  return sanitized;
};

const Link: React.FC<
  NextLinkProps & {
    className?: string;
    title?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    children?: React.ReactNode;
  }
> = ({ className, children, href, ...props }) => {
  // Sanitize the href before passing it to Next.js's Link component
  const sanitizedHref = sanitizeHref(href as string);

  return (
    <NextLink {...props} href={sanitizedHref} className={className}>
      {children}
    </NextLink>
  );
};

export default Link;
