jQuery(document).ready(function($){
  $('#example').DataTable({
    language: {
      lengthMenu: "T'en veux _MENU_ par page",
      info: "T'es bigleux ? c'est la page _PAGE_ sur _PAGES_",
      search: "Cherche bouffon !",
      paginate: {
        first:      "Premier",
        last:       "Précédent",
        next:       "Suivant",
        previous:   "Dernier"
      }
    }
  });
});




/* 
function Pagination() {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Pagination; */