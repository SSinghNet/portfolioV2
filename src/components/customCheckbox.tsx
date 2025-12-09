// import { useCheckbox, Chip, VisuallyHidden, tv } from ".nextui-org/react";
// import { CheckIcon } from './checkIcon.jsx'
//
// const checkbox = tv({
//     slots: {
//         base: "border-0 hover:bg-default-200 p-2 py-4 shadow-lg rounded-lg",
//         content: "text-primary-800"
//     },
//     variants: {
//         isSelected: {
//             true: {
//                 base: "border-primary bg-primary hover:bg-blue-400 hover:border-blue-400",
//                 content: "text-primary-foreground pl-1"
//             }
//         },
//         isFocusVisible: {
//             true: {
//                 base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
//             }
//         }
//     }
// })
//
// export const CustomCheckbox = (props: any) => {
//     const {
//         children,
//         isSelected,
//         isFocusVisible,
//         getBaseProps,
//         getLabelProps,
//         getInputProps,
//     } = useCheckbox({
//         ...props
//     })
//
//     const styles = checkbox({ isSelected, isFocusVisible })
//
//     return (
//         <label {...getBaseProps()}>
//             <VisuallyHidden>
//                 <input {...getInputProps()} />
//             </VisuallyHidden>
//             <Chip
//                 classNames={{
//                     base: styles.base(),
//                     content: styles.content(),
//                 }}
//                 color="primary"
//                 startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
//                 variant="faded"
//                 {...getLabelProps() as any}
//             >
//                 {children ? children : isSelected ? "Enabled" : "Disabled"}
//             </Chip>
//         </label>
//     );
// }