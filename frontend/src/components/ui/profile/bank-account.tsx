import { ChevronLeft } from "lucide-react";

function BankAccount({ handleClose }: { handleClose: () => void }) {
  return (
    <div>
      <ChevronLeft onClick={() => handleClose()} />
      BankAccount
    </div>
  );
}

export default BankAccount;
