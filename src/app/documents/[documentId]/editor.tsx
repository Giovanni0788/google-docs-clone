"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from '@/store/use-editor-store';
import Underline from '@tiptap/extension-underline'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { FontSizeExtension } from '@/extensions/font-size';
import { LineHeightExtension } from '@/extensions/line-heignt';
import { Ruler } from './ruler';

export const Editor = () => {
    const {setEditor} = useEditorStore();

    const editor = useEditor({
        immediatelyRender: false,
        onCreate({editor}) {
            setEditor (editor);
        },
        onDestroy() {
            setEditor (null);
        },
        onUpdate({editor}) {
            setEditor (editor);
        },
        onSelectionUpdate({editor}) {
            setEditor (editor);
        },
        onTransaction({editor}) {
            setEditor (editor);
        },
        onFocus({editor}) {
            setEditor (editor);
        },
        onBlur({editor}) {
            setEditor (editor);
        },
        onContentError({editor}) {
            setEditor (editor);
        },
        editorProps: {
            attributes: {
                style: "padding-left: 56px; padding-right: 65px;",
                class: "focus:outline-none print:border-0 bg-wite border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
            },
        },
        extensions: [
            StarterKit,
            LineHeightExtension.configure({
                types: ["heading", "paragraph"],
                defaultLineHeight: "normal"
            }),
            FontSizeExtension,
            TextAlign.configure({
                types:["heading", "paragraph"]
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
                defaultProtocol:"https"
            }),
            Color,
            Highlight.configure({
                multicolor:true,
            }),
            FontFamily,
            TextStyle,
            Underline,
            Image,
            ImageResize,
            Table,
            TableCell,
            TableHeader,
            TableRow,
            TaskItem.configure({
                nested:true,
            }),
            TaskList,
        ],
      })
    return (
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible'>
<Ruler />
<div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
<EditorContent editor={editor} />
</div>
        </div>
    );
};