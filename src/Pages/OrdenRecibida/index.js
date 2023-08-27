import { ReceivedBtn } from "../../Components/Buttons";

export default function OrdenRecibida() {
  return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl py-10">¡Hemos recibido tu orden!</h1>
        <h2 className="text-3xl py-5">
          Tu orden fue procesada y estará lista pronto
        </h2>
            <ReceivedBtn text="Volver a inicio" />
      </div>
  );
}
