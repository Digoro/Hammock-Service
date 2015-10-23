# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.create(item: '멋쟁이 사자처럼을 시작하기 전의 당신과 지금의 당신, 어떤 것이 달라졌나요?', _date: '2015-09-20')
Question.create(item: '당신은 어떨 때 의지를 잃게 되나요?', _date: '2015-09-22')

Answer.create(_date: "2015-09-08", e_mail: "tu_k@naver.com", todayQuestion: "비오는 날은 당신에게 어떤 의미가 있나요?", 
usersAnswer: "비오는 날. 한 번은 양말이 흠뻑 젖을 정도로 비가 내렸다. 즐거운 날은 아니었던 것 같다. 그 날 누군가에게 좋지 않은 말을 들었나. 그래서 그냥 젖어도 가만히 있을 수 밖에 없었다. 사실 나는 옷이 젖는걸, 신발이 젖는 걸 매우 싫어한다. 근데 그 날은 싫다는 생각도 들지 않는 날이었다.")
Answer.create(_date: "2015-09-09", e_mail: "tu_k@naver.com", todayQuestion: "요즘에는 무슨 공부를 하고 있나요?", 
usersAnswer: "요즘 나는 코딩을 공부하고 있다. 이름도 예쁜 루비! 자바스크립트! 멋쟁이 사자처럼 짱짱!")
Answer.create(_date: "2015-09-10", e_mail: "tu_k@naver.com", todayQuestion: "당신을 음식에 비유하면 무엇이라고 할 수 있을까요?", 
usersAnswer: "왜 나를 음식에 비유하라는 건지 잘 모르겠지만, 해보라고 하니 생각해볼까. 그냥 먹으면 왠만한 사람들이 다 먹을 수는 있는 음식, 그러나 결국 좋아하기는 소수의 사람들만 좋아하는 그런 음식. 무난무난한 멸치국수 정도?")
Answer.create(_date: "2015-09-11", e_mail: "tu_k@naver.com", todayQuestion: "당신은 어떨 때 의지를 잃게 되나요?", 
usersAnswer: "내가 나름대로 하고 싶은 것을 찾고 그 것에 열중하고 있는 중이었는데 주변사람들은 소홀해진거냐고 말하며 실망감을 내비칠 때, 나는 소심하게 모든 걸 다 놓아버리고 싶다는 생각을 했다.")
Answer.create(_date: "2015-09-12", e_mail: "tu_k@naver.com", todayQuestion: "최근에 공허하다는 느낌을 받았을 때는 언제였나요?", 
usersAnswer: "엄마 아빠가 아무말도 없이 시골에 내려갔을 때. 집에 왔는 데 아무도 없었다. 엄마한테 전화를 했다. 시골이랬다. 어쩌피 바쁜 딸이니까라고 생각했겠지만 정말 1도 말 안해주고.. TV소리만 윙윙거리는 집이 낯설었다.")
Answer.create(_date: "2015-09-13", e_mail: "tu_k@naver.com", todayQuestion: "당신과 가장 가까운 관계에 있는 사람은 누구인가요?", 
usersAnswer: "동생. 나는 동생과 친해진 지 그리 오래되지 않았다. 다들 동생이랑 노는걸 보면 놀란다. 사실 나도 놀랍다. 나이가 들어갈 수록 젊은이들이 좋은건지..ㅋ..")
Answer.create(_date: "2015-09-14", e_mail: "tu_k@naver.com", todayQuestion: "당신은 몇 시에 가장 활동적인가요?", 
usersAnswer: "나는 밤에 가장 활동적이다. 정확히 말하면 새벽. 자정 넘은 새벽. 새벽은 편지쓰기 좋은 시간이다. 흑역사를 쓰기 좋은 시간. 새벽에 글쓰면 항상 흑역사 갱신하는 느낌.")
Answer.create(_date: "2015-09-15", e_mail: "tu_k@naver.com", todayQuestion: "당신에게 적절한 수면시간은 몇 시부터 몇 시까지 인가요?", 
usersAnswer: "수면시간은 다다익선이긴하나, 굳이 생각해보면. 자정 12시부터 오전 10시까지? 자정 넘으면 힘들고 12시 전에 자면 뭔가 너무 일찍자는 것 같아서 억울하다. 10시간쯤 자고 일어나면 깨운한 느낌.")
Answer.create(_date: "2015-09-16", e_mail: "tu_k@naver.com", todayQuestion: "지하철, 버스를 탈 때 어떤 자리에 앉는 것을 좋아하나요?", 
usersAnswer: "버스는 맨 끝자리나 뒷문 가장 가까운 자리. 멀미가 심해서 버스 타는게 힘들어서 죽어버릴 것 같다.")













