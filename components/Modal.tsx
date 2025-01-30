import React from 'react'
interface ModalProps {
    open: boolean,
    children: React.ReactNode
    setOpen: (open: boolean) => boolean | void
}
const Modal:React.FC<ModalProps> = ({ open, children, setOpen }) => {
  return (
        <dialog id="my_modal_3" className={`modal ${open ? "modal-open": ""}`} >
            <div className="modal-box">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={() => setOpen(false)}
                >✕</button>
                {children}
            </div>
        </dialog>
  )
}

export default Modal