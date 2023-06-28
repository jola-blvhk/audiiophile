export const hello = () => {
    <div className="absolute inset-0 top-[90px]  z-20 overflow-hidden ">
      <div
        className="fixed border border-red-500 inset-0 bg-gray-900 opacity-50"
        onClick={handleClose}
      ></div>

      <div
        ref={modalRef}
        className="fixed top-[90px] inset-0 z-20   overflow-y-auto max-h-full  "
      >
        {children}
      </div>
    </div>;
}