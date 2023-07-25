import { useState } from "react"
import { Modal } from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import "../../sass/index.scss"

export default function ModalValidation() {
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  return (
    <div className="flex justify-center">
      <button
        className="bg-slate-300 py-2 px-5 rounded-full mt-4"
        onClick={onOpenModal}
      >
        Save
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <p>Employee Created !</p>
      </Modal>
    </div>
  )
}
