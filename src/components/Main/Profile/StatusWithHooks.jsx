import React, { useEffect, useState } from "react";
import s from "./Main.module.css";

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
      setStatus(props.status);
  }, [props.status] );

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const activteEditMode = () => {
    setEditMode(true);
  };

  const deactivteEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  return (
    <div className={s.status}>
      {!editMode && (
        <div>
          <span onDoubleClick={activteEditMode}>{props.status || '------'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivteEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
