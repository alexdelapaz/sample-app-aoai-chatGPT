import { useState, useEffect } from 'react';
import { Dialog, DialogFooter, PrimaryButton, DefaultButton } from '@fluentui/react';


const config_rosu = {
  message: import.meta.env.CUSTOM_DISCLAIMER || 
    "Models can make mistakes; it is the user's responsibility to verify the answers.",
};

console.log('test:' + import.meta.env.CUSTOM_DISCLAIMER)

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
          <PrimaryButton onClick={rosu_Accept} text="Accept" />
          <DefaultButton onClick={rosu_deny} text="Deny" />
        </DialogFooter>
      </Dialog>
    </>
  );
};