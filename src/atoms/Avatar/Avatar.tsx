import classes from "./Avatar.module.scss";

interface IProps {
  src: string;
  size: 32 | 64;
  alt?: string;
}

const Avatar: React.FC<IProps> = ({ size, src, alt, ...otherProps }) => (
  <img className={classes.avatar} width={size} height={size} src={src} alt={alt} {...otherProps} />
);

export default Avatar;
