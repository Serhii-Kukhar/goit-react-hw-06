import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={s.itemBox}>
      <div className={s.contactInfo}>
        <div className={s.nameBox}>
          <FaUser className={s.icon} />
          <span>{name}</span>
        </div>
        <div className={s.phoneBox}>
          <BsFillTelephoneFill className={s.icon} />
          <span>{number}</span>
        </div>
      </div>
      <button className={s.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
