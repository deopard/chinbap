$(() => {
    class Modal {
        static show(content, title = '메롱') {
            $('#modalTitle').html(title);
            $('#modalBody').html(content);
            $('#alertModal').modal('show');
        }
    }

    window.Modal = Modal;
});