import React from 'react';
import { Select } from 'antd';

const Main = () => {

	return (
		<div>
			<section>
				<div>캐릭터 이미지</div>
				<div>
					<div>i</div>
					<p>모든 정보를 입력하면 정확도가 올라가요!</p>
					<h1>쿠션어 제작을 해드려요</h1>
				</div>
			</section>
			<section>
				<textarea />
				<p>100자 / 400자</p>
			</section>
			<section>
				<h1>쿠션어 재료</h1>
				<p>설명 문구</p>
				<div>
					<div>!</div>
					<p>쿠션어를 만들기 위해서 재료가 모두 필요해요!</p>
				</div>
				<div>
					<Select
						defaultValue="직업"
						style={{ width: 120 }}
						//onChange={}
						options={[
							{
								value: 'it',
								label: 'it',
							}
						]}
					/>
					<Select
						defaultValue="상대"
						style={{ width: 120 }}
						//onChange={}
						options={[
							{
								value: '상사',
								label: '상사',
							},
							{
								value: '동료',
								label: '동료',
							},
							{
								value: '고객',
								label: '고객',
							}
						]}
					/>
					<Select
						defaultValue="목적"
						style={{ width: 120 }}
						//onChange={}
						options={[
							{
								value: '요청하기',
								label: '요청하기',
							},
							{
								value: '거절하기',
								label: '거절하기',
							},
							{
								value: '질문하기',
								label: '질문하기',
							},
							{
								value: '사과하기',
								label: '사과하기',
							},
							{
								value: '안부 인사하기',
								label: '안부 인사하기',
							}
						]}
					/>
					<Select
						defaultValue="수단"
						style={{ width: 120 }}
						//onChange={}
						options={[
							{
								value: '이메일',
								label: '이메일',
							},
							{
								value: '메신저',
								label: '메신저',
							},
							{
								value: '대면',
								label: '대면',
							}
						]}
					/>
				</div>
				
			</section>
		</div>
	);
}

export default Main;