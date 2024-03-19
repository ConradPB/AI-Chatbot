import { Avatar, Box, Typography } from '@mui/material'
import { useAuth } from '../../context/Authcontext'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

function extractCodeFromString(message: string){
if (message.includes("```")) {
    const blocks = message.split("```")
    return blocks
}
}

function isCodeBlock(str: string) {
    if (
        str.includes('=') ||
        str.includes(';') ||
        str.includes('[') ||
        str.includes(']') ||
        str.includes('{') ||
        str.includes('}') ||
        str.includes('#') ||
        str.includes('//')
    ) {
        return true

    }
    return false
}

const ChatItem = ({ 
    content, 
    role,} : {
        content: string;
        role:'user' | 'assistant';
    }) => {
        const messageBlocks = extractCodeFromString(content)
        const auth = useAuth()
  return (
role == 'assistant' ? (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: '#004d5612', 
            borderRadius: 2, 
            my: 1, 
            gap: 2 }}> 
            <Avatar sx={{ ml: '0', bgcolor: 'white' }}>
                <img src='https://media.istockphoto.com/id/1465023127/vector/a-i-conversation-method-illustrations.jpg?s=1024x1024&w=is&k=20&c=SiZRLFq-Fi-Wt0dv56wlc6CiqVboqC_Qooj981rBWbI=' alt='ai' width={'30px'}/>
            </Avatar>
            <Box>
                {!messageBlocks && (
                    <Typography sx={{ fontSize: '20px' }}>{content}</Typography>
                )}
                {
                messageBlocks && 
                messageBlocks.length && 
                messageBlocks.map((block) => (isCodeBlock(block) ? (
                <SyntaxHighlighter 
                style={coldarkDark} 
                language='javascript' >
                    {block}
                </SyntaxHighlighter>
                ):( 
                    <Typography sx={{ fontSize: '20px' }}>{block}</Typography>
                )  
                )
                )}    

            </Box>
        </Box>
    ) : (
        <Box sx={{ 
            display: 'flex', 
            p: 2, 
            bgcolor: '#004d56',  
            gap: 2,
            borderRadius: 2 
            }}>
            <Avatar sx={{ ml: '0', bgcolor: 'black', color: 'white' }}>
                { auth?.user?.name[0] }
                { auth?.user?.name.split(' ')[1][0] } 
            </Avatar>
            <Box>
                {!messageBlocks && (
                    <Typography sx={{ fontSize: '20px' }}>{content}</Typography>
                )}
                {
                messageBlocks && 
                messageBlocks.length && 
                messageBlocks.map((block) => (isCodeBlock(block) ? (
                <SyntaxHighlighter 
                style={coldarkDark} 
                language='javascript' >
                    {block}
                </SyntaxHighlighter>
                ):( 
                    <Typography sx={{ fontSize: '20px' }}>{block}</Typography>
                )  
                )
                )}    

            </Box>
        </Box>
    )
  )
}

export default ChatItem
