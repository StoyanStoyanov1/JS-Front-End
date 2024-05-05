function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      const studentsInfo = Array.from(document.querySelectorAll('tbody tr'))
      const searchField = document.getElementById('searchField')
      for (const student of studentsInfo) {
         const searchText = searchField.value
         if (student.innerHTML.includes(searchText) && (searchText !== "")) {
            student.className = 'select'
         } else {
            student.classList.remove('select')
         }
      }

      searchField.value = ''
   }
}