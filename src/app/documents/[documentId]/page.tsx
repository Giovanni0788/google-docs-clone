import { Editor } from "./editor";
import Toolbar from "./toolbar";


interface DocumentIdPageProps {
    params: Promise<{documentId: string}>;
};

const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
const {} = await params;

return (
    <div className="nin-h-screen bg-[#FAFBFD]">
        <Toolbar />
        <Editor />
    </div>
);
}

export default DocumentIdPage;