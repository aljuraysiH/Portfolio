import styles from "./Modal.module.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useModal from "../../hooks/useModal";
import { MdEmail, MdClose } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

function Modal() {
  const { showModal, setShowModal } = useModal();
  const [isLoading, setisLoading] = useState(false);
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setisLoading(true);
    emailjs
      .sendForm(
        "service_w9y2ixv",
        "template_7d22jxf",
        form.current,
        "2YQQOIFrLrRwRB5g9"
      )
      .then(
        () => {
          setisLoading(false);
          toast.success(t("notification"));
          e.target.reset();
          setShowModal(!showModal);
        },
        (error) => {
          setisLoading(false);
          toast.error("Something went wrong");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}
      <div className={`${styles.container} ${showModal ? styles.active : ""}`}>
        <div
          onClick={() => setShowModal(!showModal)}
          className={styles.bg}
        ></div>
        <div className={styles.modal}>
          <MdClose
            className={styles.close}
            onClick={() => setShowModal(!showModal)}
          />
          <h2>{t("contact")}</h2>
          <div className={styles["modal-container"]}>
            <div className={styles["icon-container"]}>
              <MdEmail className={styles.icon} />
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name">{t("name_form")}</label>
                <input id="name" type="text" name="user_name" required />
              </div>
              <div>
                <label htmlFor="email">{t("email")}</label>
                <input id="email" type="email" name="user_email" required />
              </div>
              <div>
                <label htmlFor="message">{t("message")}</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit">{t("send")}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
