import { useState, useEffect } from 'react';
import { Dialog, DialogFooter, PrimaryButton, DefaultButton } from '@fluentui/react';


const config_rosu = {
  message: "Models make mistakes, it is the user's responsability to check the answers.",
};

export const MessageDialog = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {

    const accepted = sessionStorage.getItem('rosu_Accepted');
    if (!accepted) {
      setIsDialogVisible(true);
    }
  }, []);

  const rosu_Accept = () => {
    sessionStorage.setItem('rosu_Accepted', 'true');
    setIsDialogVisible(false);
  };

  const rosu_deny = () => {
    alert("The terms of use must be accepted.");
    setIsDialogVisible(true);
  };

  return (
    <>
      <Dialog
        hidden={!isDialogVisible}
        onDismiss={() => {}}
        dialogContentProps={{
          title: "Rules of System Use",
          subText: config_rosu.message,
        }}
      >
        <DialogFooter>
          <PrimaryButton onClick={rosu_Accept} text="I Accept" />
          <DefaultButton onClick={rosu_deny} text="I Deny" />
        </DialogFooter>
      </Dialog>
    </>
  );
};