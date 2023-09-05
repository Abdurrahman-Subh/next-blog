import NextLink from "next/link";
import PropTypes from "prop-types";
import cn from "@/utils/helpers/cn";
import { useRouter } from "next/router";

const Link = ({
  href,
  external = false,
  locale = false,
  onClick,
  className,
  children,
  ...props
}) => {
  const router = useRouter();
  return (
    <NextLink
      href={locale ? `/${router.query.locales}/${href}` : href}
      target={external ? "_blank" : undefined}
      className={cn(className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  locale: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Link;
