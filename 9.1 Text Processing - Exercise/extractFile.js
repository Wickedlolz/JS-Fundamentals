function extractFile(text) {
    let lastIndexOfDash = text.lastIndexOf('\\');
    let file = text.substring(lastIndexOfDash + 1);
    let lastIndexOfDot = file.lastIndexOf('.');
    let fileName = file.substring(0, lastIndexOfDot);
    let fileExt = file.substring(lastIndexOfDot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

// extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');