
function chartComponent() {
    return {
        init() {
            this.renderBarChart();
            this.renderPieChart();
        },
        renderBarChart() {
            const ctx = document.getElementById('barChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Tasks Completed',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        renderPieChart() {
            const ctx = document.getElementById('pieChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: 'Tasks Distribution',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            });
        }
    }
}
function taskBoard() {
    return {
        tasks: {
            todo: [
                { id: 1, name: 'مهمة 1', dueDate: '2024-10-01' },
                { id: 2, name: 'مهمة 2', dueDate: '2024-10-02' },
            ],
            inProgress: [],
            done: [],
        },
        deleteTask(id) {
            for (const status in this.tasks) {
                this.tasks[status] = this.tasks[status].filter(task => task.id !== id);
            }
        },
        init() {
            const todoList = this.$refs.todoList;
            const inProgressList = this.$refs.inProgressList;
            const doneList = this.$refs.doneList;

            Sortable.create(todoList, {
                group: 'tasks',
                animation: 150,
                onEnd: evt => {
                    this.moveTask(evt, 'todo');
                }
            });
            Sortable.create(inProgressList, {
                group: 'tasks',
                animation: 150,
                onEnd: evt => {
                    this.moveTask(evt, 'inProgress');
                }
            });
            Sortable.create(doneList, {
                group: 'tasks',
                animation: 150,
                onEnd: evt => {
                    this.moveTask(evt, 'done');
                }
            });
        },
        moveTask(evt, from) {
            const movedTask = this.tasks[from][evt.oldIndex];
            this.tasks[from].splice(evt.oldIndex, 1);
            this.tasks[evt.to.id].splice(evt.newIndex, 0, movedTask);
        }
    };
}
// function addTask() {
//     const taskName = document.getElementById('taskName').value;
//     const dueDate = document.getElementById('dueDate').value;
//     const newTask = {
//         id: Date.now(),
//         name: taskName,
//         dueDate: dueDate
//     };
//     this.tasks.todo.push(newTask);
//     document.getElementById('taskName').value = '';
//     document.getElementById('dueDate').value = '';
// }
// function profile() {
//     return {
//         user: {
//             name: 'أمان',  // استبدل هذه بالقيم الحقيقية
//             email: 'aman@example.com',
//             bio: 'مطور ويب شغوف بتقنيات البرمجة.'
//         },
//         saved: false,
//         saveProfile() {
//             // هنا يمكنك إضافة الكود لإرسال البيانات إلى الخادم (API)
//             // سأضع هنا فقط إشارة إلى نجاح الحفظ
//             this.saved = true;
//             setTimeout(() => {
//                 this.saved = false; // إخفاء الرسالة بعد 3 ثوانٍ
//             }, 3000);
//         }
//     };
// }
// function uploadImage(event) {
//     const file = event.target.files[0];
//     // يمكنك استخدام FormData لإرسال الصورة إلى الخادم
//     console.log(file);
// }




