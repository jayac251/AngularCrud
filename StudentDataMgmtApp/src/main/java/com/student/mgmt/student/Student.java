package com.student.mgmt.student;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String passport;
	private String isactive;
	private String status;
	private String history_id;
	
	public Student()
	{
		super();
	}

	public Student(Long id, String name, String passport, String isactive, String status, String history_id) {
		super();
		this.id = id;
		this.name = name;
		this.passport = passport;
		this.isactive = isactive;
		this.status = status;
		this.history_id = history_id;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the passport
	 */
	public String getpassport() {
		return passport;
	}

	/**
	 * @param passport the passport to set
	 */
	public void setpassport(String passport) {
		this.passport = passport;
	}

	/**
	 * @return the isactive
	 */
	public String getIsactive() {
		return isactive;
	}

	/**
	 * @param isactive the isactive to set
	 */
	public void setIsactive(String isactive) {
		this.isactive = isactive;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the history_id
	 */
	public String getHistory_id() {
		return history_id;
	}

	/**
	 * @param history_id the history_id to set
	 */
	public void setHistory_id(String history_id) {
		this.history_id = history_id;
	}
	
	
}