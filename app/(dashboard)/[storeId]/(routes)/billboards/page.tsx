import { getBillboards } from "@/lib/actions";
import BillboardClient from "@/app/(dashboard)/[storeId]/(routes)/billboards/_components/BillboardClient";
import { BillboardColumn } from "./_components/columns";
import { format } from "date-fns";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await getBillboards(params.storeId);

  const formattedBillboards = billboards?.map((item) => {
    return {
      _id: item._id,
      label: item.label,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    };
  }) as BillboardColumn[];

  if (!formattedBillboards) {
    return (
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BillboardClient data={[]} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardsPage;
