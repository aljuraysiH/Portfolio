import { Blocks } from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.container}>
      <Blocks
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};
export default Loader;
